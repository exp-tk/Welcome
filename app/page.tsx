import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { ShareButton } from "./components/ShareButton";

export default function Home() {
  return (
    <div className="px-6 md:px-8">
      <section className="min-h-dvh flex justify-center flex-col">
        <h2 className="text-center font-bold text-6xl tracking-tight">
          The quick brown fox jumps over the lazy dog.
        </h2>
        <h3 className="text-center font-bold text-3xl tracking-tight mt-2">
          素早い茶色の狐はのろまな犬を飛び越える
        </h3>
        <div className="text-center mt-8">
          <Button color="primary" size="lg" variant="shadow">
            <span className="text-center font-bold">
              <p className="font-bold">オープンテストに参加する</p>
              <p className="text-xs font-bold">(押しても何も起こらないよ)</p>
            </span>
          </Button>
        </div>
      </section>
      <section className="min-h-dvh flex flex-col pt-24">
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          Applications
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          実施中のオープンテスト
        </h3>
        <div className="my-16 md:flex md:flex-1 md:items-center md:justify-center">
          <Card className="w-auto md:w-[400px]">
            <CardHeader className="flex gap-3">
              <Link isExternal href="https://led.tinykitten.dev">
                <Image
                  alt="TrainLED"
                  height={40}
                  radius="sm"
                  src="https://github.com/exp-tk/TrainLED/blob/main/public/icons/icon-512.png?raw=true"
                  width={40}
                />
              </Link>
              <Link isExternal href="https://led.tinykitten.dev">
                <div className="flex flex-col">
                  <p className="text-md text-foreground">TrainLED</p>
                  <p className="text-small text-default-500">
                    <span className="font-bold">led</span>.tinykitten.dev
                  </p>
                </div>
              </Link>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                TrainLCDアプリのスピンオフ。お使いのブラウザで使えるあなた専用の電光掲示板。
                <br />
                不慣れな路線で迷いそうな時、降りれるか不安な時。きっとあなたの役に立つはずです。
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://led.tinykitten.dev">
                オープンテストに参加
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="min-h-dvh flex flex-col pt-24">
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          Buy Me A Beer
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          応援してくれてもいいんですよ
        </h3>
        <div className="flex flex-1 items-center justify-center">
          <ShareButton />
        </div>
      </section>
    </div>
  );
}
