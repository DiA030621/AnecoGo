import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Este stack maneja las rutas */}
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="welcome" options={{ title: 'Bienvenido' }} />
        </Stack>
    );
}
