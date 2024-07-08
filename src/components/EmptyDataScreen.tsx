function EmptyDataScreen({children} : {children: React.ReactNode}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-md flex items-center justify-center w-full">
      <p className="text-gray-500 text-center">{children}</p>
    </div>
  );
}

export default EmptyDataScreen;
