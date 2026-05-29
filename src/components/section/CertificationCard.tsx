import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import type { CertificationCardType } from "@/types/CertificationCard"

const CertificationCard = ({cerName, cerDescription, cerImageURL, cerURL, dateAcquired, cerGiver, cerPlatform} : CertificationCardType) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-white/60 backdrop-blur-sm">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={cerImageURL}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
        <CardTitle className="h-[7vh]">{cerName}</CardTitle>
        <CardDescription className="line-clamp-3">
          {cerDescription}
        </CardDescription>
        <p>Acquired: {dateAcquired}</p>
        <p>Given by: {cerGiver}</p>
        <p>Platform: {cerPlatform}</p>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-blue-500"><a href={cerURL} target="_blank" rel="noopener referral">View certification</a></Button>
      </CardFooter>
    </Card>
  )
}

export default CertificationCard;