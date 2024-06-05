'use client';

import React from 'react';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { api } from '@/convex/_generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'convex/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
});
export default function Subscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const createSubscriber = useMutation(api.subscribers.createSubscriber);
  return (
    <div className="bg-neutral-800/20 rounded-lg pt-6 pb-8  px-6 flex flex-col space-y-4 mt-4 animate-slide-from-down-and-fade-6">
      <span>
        Get the latest from me on my newsletter! I&apos;ll share resources
        I&apos;ve come across and keep you up to date on my latest projects.
      </span>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const { success, message } = await createSubscriber({
              email: values.email,
            });
            if (success) {
              toast.success(message);
            } else {
              toast.error(message);
            }
            form.reset();
          })}
          className="flex flex-row space-x-2 items-center group cursor-pointer justify-end"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-10 px-3 text-base py-2 rounded-lg border border-neutral-800 bg-neutral-800/50 text-neutral-400 focus:outline-none focus:ring-0.5 focus:ring-secondary/20 focus:ring-offset-0.5 focus:ring-offset-secondary-800 focus:border-secondary/20"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="h-10 rounded-lg bg-secondary font-medium px-6 text-neutral-800 hover:bg-secondary/80"
          >
            <span>Join</span>
          </button>
        </form>
      </Form>
    </div>
  );
}
