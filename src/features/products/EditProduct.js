import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editProduct} from "./productSlice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
  const navigate = useNavigate();
  const existingProduct = products.filter(product => product.id === params.id);
  const { productName, productDetail,productDate } = existingProduct[0];
  const [values, setValues] = useState({
    productName,
    productDetail,
    productDate,
  });

  const [error,setError]=useState({});


  const handleEditProduct = () => {

    const validateError={};

      if(values.productName==='') 
      {
        validateError.productName="Please update Product Name"
      }
       if(values.productDetail==='')
       {
        validateError.productDetail="Please update Product Details"   
       }
       if(values.productDate==='')
       {
        validateError.productDate="Please update Product Date is Must"
       }

       setError(validateError)
       
      
       if(Object.keys(validateError).length===0){
    setValues({ productName: '', productDetail: '', productDate: '' });
    dispatch(editProduct({
      id: params.id,
      productName: values.productName,
      productDetail: values.productDetail,
      productDate: values.productDate,
    }));
    toast('Product update successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    navigate('/');
    }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Product Name"
        value={values.productName}
        onChange={(e) => setValues({ ...values, productName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Product Name' }}
      />
      {error.productName && <span className="text-red-700 text-xs">{error.productName}</span>}
      <br />
      <TextField
        label="Product Detail"
        value={values.productDetail}
        onChange={(e) => setValues({ ...values, productDetail: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Product Detail' }}
      />
      {error.productName && <span className="text-red-700 text-xs">{error.productName}</span>}
      <br />
      <TextField
        label="Product Date"
        value={values.productDate}
        onChange={(e) => setValues({ ...values, productDate: e.target.value })}
        inputProps={{ type: 'Date', placeholder: 'Enter Product Date' }}
      />
      {error.productName && <span className="text-red-700 text-xs">{error.productName}</span>}
      <br />
      <Button onClick={handleEditProduct}>Edit</Button>
    </div>
  )
}

export default EditProduct