import './style.scss';
import SectionLabel from '../../commons/section-label';
import CategoryItem from './category-item';

const categories = [
  {
    badgeLabel: 'Section 1',
    sectionTitle: 'Animals and Animal Products',
    itemList: [
      {
        chapterId: '1',
        chapterLabel: 'Chapter 01',
        chapterDescription: 'Animals'
      },
      {
        chapterId: '2',
        chapterLabel: 'Chapter 02',
        chapterDescription: 'Meat and edible offal'
      },
      {
        chapterId: '3',
        chapterLabel: 'Chapter 03',
        chapterDescription:
          'Fish, molluscs, crustaceans, and other aquatic invertebrates'
      },
      {
        chapterId: '4',
        chapterLabel: 'Chapter 04',
        chapterDescription:
          "Dairy produce, birds' eggs, honey and other edible products of animal origin that are not specified elsewhere"
      },
      {
        chapterId: '5',
        chapterLabel: 'Chapter 05',
        chapterDescription:
          'Other products of animal origin that are not specified elsewhere'
      }
    ]
  },
  {
    badgeLabel: 'Section 2',
    sectionTitle: 'Vegetables and Vegetable Products',
    itemList: [
      {
        chapterId: '6',
        chapterLabel: 'Chapter 06',
        chapterDescription:
          'Live trees and plants, bulbs, roots, etc., cut flowers and ornamental foliage'
      },
      {
        chapterId: '7',
        chapterLabel: 'Chapter 07',
        chapterDescription: 'Edible vegetables, certain roots and tubers'
      },
      {
        chapterId: '8',
        chapterLabel: 'Chapter 08',
        chapterDescription:
          'Edible fruit and nuts, the peel of citrus fruits or melons'
      },
      {
        chapterId: '9',
        chapterLabel: 'Chapter 09',
        chapterDescription: 'Tea, coffee, mate and spices'
      },
      {
        chapterId: '10',
        chapterLabel: 'Chapter 10',
        chapterDescription: 'Cereals'
      },
      {
        chapterId: '11',
        chapterLabel: 'Chapter 11',
        chapterDescription:
          'Milling products, malt, wheat gluten, starches, and inulin'
      },
      {
        chapterId: '12',
        chapterLabel: 'Chapter 12',
        chapterDescription:
          'Oil seeds and oleaginous fruits, grains, straw and fodder, seeds and fruit, and industrial or medicinal plants'
      },
      {
        chapterId: '13',
        chapterLabel: 'Chapter 13',
        chapterDescription: 'Lac, gum, resin, and other saps and extracts'
      },
      {
        chapterId: '14',
        chapterLabel: 'Chapter 14',
        chapterDescription:
          'Vegetable plaiting materials, and vegetable products that are not specified elsewhere'
      }
    ]
  }
];

const CategoryList = () => {
  return (
    <main className='category-list'>
      {categories &&
        categories.map((category, index) => {
          return (
            <>
              <SectionLabel
                title={category.badgeLabel}
                className='bg-05072933'
              />
              <h1 className='category-list__section-title'>
                {category.sectionTitle}
              </h1>

              {category.itemList &&
                category.itemList.map(item => {
                  return (
                    <CategoryItem
                      key={item.chapterId}
                      id={item.chapterId}
                      idLabel={item.chapterLabel}
                      description={item.chapterDescription}
                    />
                  );
                })}
              {index !== categories.length - 1 && (
                <hr className='category-list__separator' />
              )}
            </>
          );
        })}
    </main>
  );
};

export default CategoryList;

