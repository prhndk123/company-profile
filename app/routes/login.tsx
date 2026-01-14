import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "~/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "~/store/auth.store";
import { loginSchema, type LoginSchema } from "~/schemas/auth.schema";

const Login = () => {
  const { isAuthenticated, login } = useAuthStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data);

      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });

      navigate("/");
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error?.message ?? "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-1 items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">
                T
              </span>
            </div>
            <div>
              <p className="font-heading font-bold text-sm">TOYOTA</p>
              <p className="text-[10px] text-muted-foreground">
                Engine Plant #3
              </p>
            </div>
          </Link>

          <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to access your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-muted-foreground">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-muted-foreground">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <div className="mt-8 pt-6 border-t border-border">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
