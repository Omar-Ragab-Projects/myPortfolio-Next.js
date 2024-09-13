type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </div>
  );
}
