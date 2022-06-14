const HeaderItem = (props) => {
  const { Icon, title } = props;
  return (
    <div className="group">
      <Icon className="group__icon" />
      <p className="group__title">{title}</p>
    </div>
  );
};

export default HeaderItem;
