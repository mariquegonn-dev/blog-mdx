type TagProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export const Tag = ({ children, size = 'sm' }: TagProps) => {
  return (
    <>
      <div>
        <div size={size} className="">{children}</div>
      </div>
    </>
  );
};
