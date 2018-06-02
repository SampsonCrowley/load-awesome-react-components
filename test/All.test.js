import React from 'react';
import Loaders from '../build/rrpm.module';
import renderer from 'react-test-renderer';

const loaderKeys = Object.keys(Loaders)

for(let l = 0; l < loaderKeys.length; l++){
  const sectionName = loaderKeys[l],
        section = Loaders[sectionName],
        sectionKeys = Object.keys(section)

  for(let i = 0; i < sectionKeys.length; i++){
    const name = sectionKeys[i],
          Component = section[name]
    describe(`${sectionName}::${name}`, () => {
      const component = renderer.create(
        <Component />
      );

      let tree;

      it('should render correctly', () => {
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

    });
  }
}
