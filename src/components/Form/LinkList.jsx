import { Link } from 'react-router-dom';

const LinkList = ({ links }) => {
  return links ? (
    <div className="form__links">
      {links.map(({ id, href, text, type }) => {
        return (
          <Link key={id} to={href} className={`form__links-${type}`}>
            {text}
          </Link>
        );
      })}
    </div>
  ) : null;
};

export default LinkList;
