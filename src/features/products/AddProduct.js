import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addProduct } from "./productSlice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    productName: '',
    productDetail: '',
    productDate: ''
  });


  const [error,setError]=useState({});

  
    const handleAddProduct = () => {  
      const validateError={};

      if(values.productName==='') 
      {
        validateError.productName="Product Name is Must"
      }
       if(values.productDetail==='')
       {
        validateError.productDetail="Product Details is required"   
       }
       if(values.productDate==='')
       {
        validateError.productDate="Date is Must"
       }

       setError(validateError)

      if(Object.keys(validateError).length===0){
      setValues({ productName: '', productDetail: '',productDate:''});
      dispatch(addProduct({
        id: uuidv4(),
        productName: values.productName,
        productDetail: values.productDetail,
        productDate: values.productDate,
        
      }));
      toast('Product added successfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate('/')
      }
  }


  


  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        required
        label="Product Name"
        value={values.productName}
        onChange={(e) => setValues({ ...values, productName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Product Name '}}
      />
      {error.productName && <span className="text-red-700 text-xs">{error.productName}</span>}
      <br />
      <TextField
        label="Product Detail"
        value={values.productDetail}
        onChange={(e) => setValues({ ...values, productDetail: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Product Detail',}}
      />
      {error.productDetail && <span className="text-red-700 text-xs">{error.productDetail}</span>}

      <br />
      <TextField
        label="Product Date"
        value={values.productDate}
        onChange={(e) => setValues({ ...values, productDate: e.target.value })}
        inputProps={{ type: 'Date', placeholder: 'Enter Product Date' }}
      />
      {error.productDate && <span className="text-red-700 text-xs">{error.productDate}</span>}
      <br />
      <Button onClick={handleAddProduct}>Submit</Button>

    </div>

  )
}

export default AddProduct