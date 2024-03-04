import styles from './Accordion.module.css';
import { ARROW_ICON } from '@assets';
import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const handleClick = (index) =>
    activeItemIndex === index
      ? setActiveItemIndex(null)
      : setActiveItemIndex(index);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.title} onClick={() => handleClick(index)}>
          <div className={styles.item}>
            <p>{item.title}</p>
            <img
              src={ARROW_ICON}
              className={activeItemIndex === index ? styles.expanded : ''}
            />
          </div>
          {activeItemIndex === index && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
