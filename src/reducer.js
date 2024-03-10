// reducer.js

const formInput = {
    address: '',
    phone_number: '',
    full_name: '',
    total_amount: '',
    data: []
}

const FormReducer = (state = formInput, action, form) =>{
    switch (action.type) {
        case 'form':
          return { ...state, address: form.address, phone_number:form.phone_number, full_name:form.fullname, total_amount:form.total_amount};
        case 'data':
          return { ...state, data:form };
        default:
          return state;
      }
}
  
  
  
  export default FormReducer;
  