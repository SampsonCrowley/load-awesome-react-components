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
        <Component className='test' style={{height: '100px', width: '100px'}} />
      );

      let tree;

      it('should render correctly', () => {
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('should accept additional classNames', () => {
        expect(tree.props.className).toMatch(/\s+test$/)
      })

      it('should accept all other standard props', () => {
        expect(tree.props.style).toBeTruthy()
        expect(tree.props.style.height).toBe('100px')
        expect(tree.props.style.width).toBe('100px')
      })

    });
  }
}
