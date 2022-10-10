import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { ArrowUturnRightIcon } from '@heroicons/react/24/solid';

const Pagination = ({ page, count, perPage, path, theme }) => {
  const totalLinks = Math.ceil(count / perPage);
  let startLoop = page;
  let diff = totalLinks - page;
  if (diff <= 3) {
    startLoop = totalLinks - 3;
  }
  let endLoop = startLoop + 3;
  if (startLoop <= 0) {
    startLoop = 1;
  }
  const links = () => {
    const allLinks = [];
    for (let i = startLoop; i <= endLoop; i++)
      allLinks.push(
        <li key={i}>
          <Link
            className={`${
              theme === 'light' ? 'pagination-link-light' : 'pagination-link'
            } ${page === i && 'bg-indigo-600 text-white'}`}
            to={`/${path}/${i}`}
          >
            {i}
          </Link>
        </li>
      );
    return allLinks;
  };
  const next = () => {
    if (page < totalLinks) {
      return (
        <li>
          <Link
            className={`${
              theme === 'light' ? 'pagination-link-light' : 'pagination-link'
            }`}
            to={`/${path}/${page + 1}`}
          >
            <ArrowUturnRightIcon className="w-4 h-4 inline-block pb-1" />
          </Link>
        </li>
      );
    }
  };
  const prev = () => {
    if (page > 1) {
      return (
        <li>
          <Link
            className={`${
              theme === 'light' ? 'pagination-link-light' : 'pagination-link'
            }`}
            to={`/${path}/${page - 1}`}
          >
            <ArrowUturnLeftIcon className="w-4 h-4 inline-block pb-1" />
          </Link>
        </li>
      );
    }
  };
  return (
    count > perPage && (
      <ul className="flex mt-2">
        {prev()}
        {links()}
        {next()}
      </ul>
    )
  );
};

export default Pagination;
