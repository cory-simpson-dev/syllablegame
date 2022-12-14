// value = 1, 3, -1

function AssignPoints(value: number) {
  return (
    <button
        type="button"
        className="flex justify-center items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        {value}
    </button>
  )
}

export default AssignPoints
