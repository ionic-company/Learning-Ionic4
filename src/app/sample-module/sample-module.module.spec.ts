import { SampleModuleModule } from './sample-module.module';

describe('SampleModuleModule', () => {
  let sampleModuleModule: SampleModuleModule;

  beforeEach(() => {
    sampleModuleModule = new SampleModuleModule();
  });

  it('should create an instance', () => {
    expect(sampleModuleModule).toBeTruthy();
  });
});
