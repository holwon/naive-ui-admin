import 'reflect-metadata';
import { Container } from 'inversify';
const container = new Container();
// container.bind<IService>('IService').to(Service).inSingletonScope();
export { container };
