const Alert = ({ type, text }) => {


  return (
    <div className='absolute top-16 left-0 right-0 flex justify-center items-center'>
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-blue-500"
        } p-4 text-indigo-100 leading-none rounded-lg flex lg:inline-flex items-center`}
        role='alert'
      >
        <p className='py-2 items-center justify-center'> {text}</p>
      </div>
    </div>
  );
};

export default Alert;
