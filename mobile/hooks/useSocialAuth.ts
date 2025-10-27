import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { startSSOFlow } = useSSO();

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
        setIsLoading(true);
        setError(null);
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy });
            if (createdSessionId && setActive) {
                await setActive({ session: createdSessionId });
            }
        } catch (error) {
            console.error("Social auth error:", error);
            setError("An error occurred during social authentication. Please try again.");
            const provider = strategy === "oauth_google" ? "Google" : "Apple";
            Alert.alert(
                "Authentication Error",
                `There was an issue signing in with ${provider}. Please try again later.`,
            );
        } finally {
            setIsLoading(false);
        }
    }
    return { isLoading, error, handleSocialAuth };
}