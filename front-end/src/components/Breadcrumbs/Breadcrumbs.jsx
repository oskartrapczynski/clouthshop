import styles from './Breadcrumbs.module.css';
import { ARROW_ICON } from '@assets';
import { GENDERS, CATEGORIES } from '@constants';
import { NavLink, useParams } from 'react-router-dom';

const Breadcrumbs = () => {
  const { gender, category, subcategory } = useParams();

  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    { categoryName: foundGender.categoryName, path: `/${foundGender.path}` },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === subcategory
    );
    breadcrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <li key={breadcrumb.path}>
          <NavLink to={breadcrumb.path} end>
            {breadcrumb.categoryName}
            <img src={ARROW_ICON} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
