import Card from "./Card";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Icon from './Icon';
import Image from "next/image";


export default function IntroCard({ intro }) {
    const {
        welcomeLabel,
        name,
        summary,
        socialButtons = []
    } = intro;

    return <Card colSpan="md:col-span-3" rowSpan="md:row-span-5 lg:row-span-5" height="md:min-h-[360px] lg:min-h-[380px]">
        <div className="flex w-full h-full">
            <div className="flex flex-col justify-between md:max-h-[300px] gap-4">
                <div className="flex flex-col h-full">
                    <h6 className="text-sm font-light m-0 text-gray-500">{welcomeLabel}</h6>
                    <p className="m-0 font-light text-xl">
                        Hi, I&apos;m <b className="font-bold">{name}</b>, {summary}
                    </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                    {socialButtons.map((socialButton) => (
                        <a
                            aria-label={socialButton.ariaLabel}
                            href={socialButton.url}
                            key={socialButton.ariaLabel}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Button aria-label={socialButton.ariaLabel}>
                                <Icon className="h-6" name={socialButton.icon} />
                                <span className="sr-only">{socialButton.screenReaderLabel}</span>
                            </Button>
                        </a>
                    ))}
                    <Tooltip>
                        <Button aria-label="easter egg btn">
                            <Icon className="h-6" name="ri:emotion-laugh-line" />
                            <span className="sr-only">Easter egg button</span>
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    </Card>
}
