import Link from 'next/link';

import { categoryPathBySlug } from '../../lib/categories';
import { authorPathByName } from '../../lib/users';
import { formatDate } from '../../lib/datetime';
import ClassName from '../../models/classname';

import { FaMapPin } from 'react-icons/fa';
import styles from './Metadata.module.scss';

const DEFAULT_METADATA_OPTIONS = {
  compactCategories: true,
};

const Metadata = ({ className, author, date, categories, options = DEFAULT_METADATA_OPTIONS, isSticky = false }) => {
  const metadataClassName = new ClassName(styles.metadata);

  metadataClassName.addIf(className, className);

  const { compactCategories } = options;

  return (
    <ul className={metadataClassName.toString()}>
      {author && (
        <li className={styles.metadataAuthor}>

        </li>
      )}
      {date && (
        <li>
          
        </li>
      )}
      {Array.isArray(categories) && categories[0] && (
        <li className={styles.metadataCategories}>
          {compactCategories && (
            <p title={categories.map(({ name }) => name).join(', ')}>
              <Link href={categoryPathBySlug(categories[0].slug)}>
                <a>{categories[0].name}</a>
              </Link>
              {categories.length > 1 && ' and more'}
            </p>
          )}
          {!compactCategories && (
            <li>
            </li>
          )}
        </li>
      )}
      {isSticky && (
        <li className={styles.metadataSticky}>
          <FaMapPin aria-label="Sticky Post" />
        </li>
      )}
    </ul>
  );
};

export default Metadata;
