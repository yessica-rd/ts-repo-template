import { codeTemplate } from '../core/code';

describe('Code template', () => {
  it('everything is working fine', () => {

    expect(codeTemplate()).toEqual('Everything is working fine! 🎉🎉');
  });  
});