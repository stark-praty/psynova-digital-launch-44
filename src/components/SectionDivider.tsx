const SectionDivider = () => {
  return (
    <div className="relative w-full h-px">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
    </div>
  );
};

export default SectionDivider;
