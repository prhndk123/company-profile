import { useNavigate, Navigate, Link } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "~/hooks/use-toast";

import { registerSchema, type RegisterSchema } from "~/schemas/auth.schema";
import { useAuthStore } from "~/store/auth.store";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register: registerUser, isAuthenticated } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser(data);

      toast({
        title: "Account created!",
        description: "Welcome to TMMIN.",
      });

      navigate("/");
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error?.message ?? "Invalid input",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-muted-foreground mb-8">
          Join the TMMIN community.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label>Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input {...register("name")} className="pl-10" />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input {...register("email")} className="pl-10" />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                {...register("password")}
                type="password"
                className="pl-10"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : (
              <>
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
