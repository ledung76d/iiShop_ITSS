/* eslint-disable react/prop-types */
const Heading = ({
  title,
  center,
  uppercase = false,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className={`text-3xl font-bold ${uppercase && "uppercase"}`}>{title}</h1>
    </div>
  )
}

export default Heading