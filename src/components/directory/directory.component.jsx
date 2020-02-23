import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.oakandfort.com/tr:w-480,ar-1-1,fo-auto,f-jpg/core/media/media.nl?id=523286&c=4547545&h=e8fedfb9c2d4e3d084b3',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://d28m5bx785ox17.cloudfront.net/v1/img/xE6Ws6IGYd1G1j9FH8Q_IaZxUbi87GeFE5Nh3Iw47DY=/sc/450x450?typ=webp',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://d28m5bx785ox17.cloudfront.net/v1/img/0OXWQuufK-FeaFTA6WXm6CC0vudQd2tsZFpsSfyoM-0=/sc/450x450?typ=webp',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://images.oakandfort.com/tr:w-480,ar-1-1,fo-auto,f-jpg/core/media/media.nl?id=705853&c=4547545&h=e70959db52e5ace5f93a',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://images.oakandfort.com/tr:w-480,ar-1-1,fo-auto,f-jpg/core/media/media.nl?id=523289&c=4547545&h=497dbdad3c0153d193e7',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory; 