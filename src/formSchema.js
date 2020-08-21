import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is Required'),
//   role: yup
//     .string()
//     .oneOf(['alumni', 'instructor', 'tl', 'student'], 'You must select a role')
//     .required('You must select a role'),
//   civil: yup
//     .string()
//     .oneOf(['single', 'married'], 'You must select a civil status')
//     .required('You must select a civil status')
})

export default formSchema