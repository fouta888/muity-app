import { useClerk } from "@clerk/clerk-expo"
import { Alert } from "react-native"

export const useSignOut = () => {
    const { signOut } = useClerk()

    const handleSignOut = async () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to sign out?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Logout",
                style: "destructive",
                onPress: () => signOut()
            }
        ])
    }
    return { handleSignOut }
}