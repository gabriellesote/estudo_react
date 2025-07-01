function Input(props){
  return(
     <input
        className="rounded-md bg-slate-100 px-4 py-2 border box-border  border-slate-400 outline-none placeholder:text-gray-400 placeholder:italic"
        {...props} // expreed
      />
  )
}
export default Input;