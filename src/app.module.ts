import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastodonModule } from './mastodon/mastodon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TwitterModule } from './twitter/twitter.module';
import { DeviantArtModule } from './deviant-art/deviant-art.module';
import { TumblrModule } from './tumblr/tumblr.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://postybirb:${process.env.DB_PASSWORD}@ds247648.mlab.com:47648/postybirb`, { useNewUrlParser: true }),
    MastodonModule,
    TwitterModule,
    DeviantArtModule,
    TumblrModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
