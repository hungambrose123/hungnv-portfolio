import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import type { CertificationCard } from "@/types/CertificationCard"

const CertificationCard = ({cerName, cerDescription, cerImageURL, cerURL, dateAcquired, cerGiver, cerPlatform} : CertificationCard) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-white/60 backdrop-blur-sm">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={cerImageURL}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
        <CardTitle>{cerName}</CardTitle>
        <CardDescription>
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

export default CertificationCard