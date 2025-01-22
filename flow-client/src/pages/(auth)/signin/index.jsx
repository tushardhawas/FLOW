import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SignInPage = () => {
  return (
    <>
      <Card className="w-full h-full  md:w-[487px] border-none shadow-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className=" text-2xl">Welcome Back</CardTitle>
        </CardHeader>
        <div className="px-7 mb-2">
          <Separator />
        </div>
        <CardContent className="p-7">
          <from className="space-y-4">
            <Input
              required
              type="email"
              value={""}
              onChange={() => {}}
              placeholder="Enter Email Address"
              disabled={false}
            />
            <Input
              required
              type="password"
              value={""}
              onChange={() => {}}
              placeholder="Enter password "
              disabled={false}
              min={8}
              max={128}
            />
           
        <Button disabled={false} size="lg" className="w-full"  >Sign In</Button>
          </from>
        </CardContent>
      </Card>
    </>
  );
};

export default SignInPage;
