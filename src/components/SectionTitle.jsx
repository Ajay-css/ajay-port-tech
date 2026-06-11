function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-sm text-white/50">
        {subtitle}
      </p>

      <h2 className="text-3xl font-semibold">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;