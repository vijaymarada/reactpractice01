import * as Yup from 'yup';

const ValidationSchema= Yup.object().shape({

firstName:Yup.string()
.min(2, 'too short')
.max(5, 'too long')
.required('required')
,
lastName:Yup.string()
.min(2, 'too short')
.max(5, 'too long')
.required('required')
,
email:Yup.string().email('Invalid Email').required('Required'), 
});

export default ValidationSchema;