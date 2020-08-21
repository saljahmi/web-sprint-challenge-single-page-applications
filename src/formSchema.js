import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is Required'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large',], 'You must select a size')
        .required('Size is Required'),
    // toppings:  yup.object().shape({
    //     onions: yup
    //         .boolean(),
    //     pepperoni: yup
    //         .boolean(),
    //     pineapple: yup
    //         .boolean(),
    //     sausage: yup
    //         .boolean(),
    // }),
    // special: yup
    //     .string(),
})

export default formSchema