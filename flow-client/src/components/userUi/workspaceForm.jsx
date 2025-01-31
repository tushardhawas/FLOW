import { z } from "zod"; // ✅ Import Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormLabel,
  FormItem,
} from "../ui/form";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import useCreateWorkspace from "@/hooks/useCreateWorkspace";


const WorkspaceForm = ({ onCancel }) => {
  const createWorkspaceSchema = z.object({
    name: z.string().min(1, "Name must be at least 1 character"), // ✅ Fixed grammar
  });

  const form = useForm({
    resolver: zodResolver(createWorkspaceSchema), // ✅ Fixed typo
    defaultValues: {
      name: "",
    },
  });

  const { mutate, isPending, error, data } = useCreateWorkspace(); // Hook imported and used here
  const onSubmit = (values) => mutate(values);

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">Create Workspace</CardTitle>
      </CardHeader>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="border p-2 rounded-md w-full"
                        placeholder="Enter workspace name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" onClick={onCancel} variant="secondary" disabled={isPending}>
                Cancel
              </Button>
              <Button type="submit" variant="" size="lg" disabled={isPending}>
                Create Workspace
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WorkspaceForm;
