import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/server/authService";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(8, " Minimum of 8 Required"),
});

const Signoutpage = () => {
  
  let navigate = useNavigate();


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });


  function onSubmit(values) {
    console.log("Form submitted:", values);
    mutate(values);
  }

  const { mutate, error,isLoading  } = useMutation({
    mutationFn: signup,
    onError: () => {
      console.error("Sign up failed:", error);
    },
    onSuccess: (data) => {
      console.log("Sign up successful:", data);
        navigate("/");
    },
  });

  console.log("inside signout.jsx");

  return (
    <>
      <Card className="w-full h-full  md:w-[487px] border-none shadow-xl">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className=" text-2xl">Sign Up</CardTitle>
          <CardDescription>
            By Signing up, you agree to our{" "}
            <Link href="/privacy">
              <span className="text-blue-700">Privacy policy </span>
            </Link>
            and{" "}
            <Link href="/terms">
              <span className="text-blue-700">Terms of Service</span>
            </Link>{" "}
          </CardDescription>
        </CardHeader>
        <div className="px-7 mb-2">
          <Separator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Enter Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter Email Address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading}  size="lg" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="px-7">
          <Separator />
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
            disabled={false}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <FcGoogle className="mr-2 size-5" />
            Login with Google
          </Button>
          <Button
            disabled={false}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <FaGithub className="mr-2 size-5" />
            Login with Github
          </Button>
        </CardContent>
        <div className="px-7">
          <Separator />
        </div>
        <CardContent className="p-7 flex items-center justify-center">
          Already have an account?
          <Link to="/auth/signin">
            <span className="text-blue-700">&nbsp;Sign-in</span>{" "}
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default Signoutpage;
