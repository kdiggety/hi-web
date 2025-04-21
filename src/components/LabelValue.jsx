function LabelValue({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="label">{label}</span>
      <span className="value-label">{value}</span>
    </div>
  );
}

export default LabelValue;