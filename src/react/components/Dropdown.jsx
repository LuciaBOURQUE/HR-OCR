import "../../sass/index.scss"

export default function Dropwdown({
  type,
  valueLabel,
  data,
  state,
  handleChange,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={type}>{valueLabel}</label>
      <select
        type="text"
        id={type}
        name={type}
        required={true}
        value={state.type}
        onChange={handleChange}
      >
        <option value="">Select your {type}</option>
        {data.map((type, index) => (
          <option key={`${type}-${index}`} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  )
}
