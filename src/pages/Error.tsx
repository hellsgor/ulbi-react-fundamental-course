import { useLocation } from 'react-router-dom';

export const Error = () => {
  const location = useLocation();
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          <h1>404</h1>
          <p>
            Страница по адресу <i>{fullUrl}</i> не найдена
          </p>
        </div>
      </div>
    </section>
  );
};
