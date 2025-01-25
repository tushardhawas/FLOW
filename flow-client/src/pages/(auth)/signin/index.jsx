import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/components/ass/authService";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


//tryyy
import { useNavigate } from "react-router";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});

const SignInPage = () => {
//try
  let navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Using the form's submit handler to directly mutate with form data
  function onSubmit(values) {
    console.log("Form submitted:", values);
    mutate(values); // Pass the form data directly to mutate
  }

  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: login,  // The function to execute on mutation
    onError: (error) => {
      console.error("Login failed:", error);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      navigate("/");

      
          },
  });
  

  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
        </CardHeader>
        <div className="px-7 mb-2">
          <Separator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <Button disabled={isLoading} size="lg" className="w-full">
                {isLoading ? "Logging In..." : "Login"}
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
          Don&apos;t have an account?{""}
          <Link to="/auth/signup">
            <span className="text-blue-700">&nbsp;Sign-up</span>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default SignInPage;
