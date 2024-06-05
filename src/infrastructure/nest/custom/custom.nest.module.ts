import { Module } from '@nestjs/common';
// import { FiltersNestModule } from './filters/filters.nest.module'
import { InterceptorsNestModule } from './interceptors/interceptors.nest.module';

@Module({
  imports: [InterceptorsNestModule],
  providers: [],
  exports: [],
})
export class CustomNestModule {}
