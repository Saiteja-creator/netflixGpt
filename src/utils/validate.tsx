

type validateProps={
    emailValue:string 
    passwordValue:string
}

export const validate = (props:validateProps) => {
  const isEmailVaild = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(props.emailValue)
  const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(props.passwordValue)
  if (!isEmailVaild) return "Email is not Valid"
  if (!isPassword) return "Password is not Valid"
  

}
