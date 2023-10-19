const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='text-lg font-bold py-2 px-4 bg-accent text-white rounded shadow'>
      {children}
    </button>
  );
};
export default Button;
