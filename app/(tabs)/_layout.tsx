import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import { themes } from '@/components/Theme';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BellRing, Compass, House, Ticket, Trophy, User } from '@tamagui/lucide-icons';
import { Platform } from 'react-native';
import { Button } from 'tamagui';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    /*
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme ?? 'light'? themes.dark.accent0 : themes.light.accent0,
        //tabBarInactiveTintColor: colorScheme ?? 'light'? themes['inactive-dark'] : themes['inactive-light'],
  
        //headerShown: false,
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerTitleAlign:'center',
        /*  *
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: colorScheme ?? 'light'? themes.dark.background : themes.light.background,
            
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        
        options={{
          title: 'Raffle Mania',
          tabBarIcon: ({ color }) => <IconSymbol name="house.fill" color={color} />,
          headerRight: () => (
            <BellRing size={24} color="$background" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>*/
      screenOptions={{
        tabBarActiveTintColor: themes[colorScheme ?? 'light'].accent9, // Active tab highlight
        tabBarInactiveTintColor: themes[colorScheme ?? 'light'].color08, // Inactive tab
        //tabBarActiveTintColor: colorScheme === 'light' ? themes.light.accent9: themes.dark.accent9, // accent0 equivalent
        // tabBarInactiveTintColor: colorScheme === 'light' ? themes.light.palette[8] : themes.dark.palette[8], // Inactive color
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerTitleStyle:{
          color: themes[colorScheme ?? 'light'].color
        },
        headerStyle:{
          backgroundColor: themes[colorScheme ?? 'light'].background
        },
        headerTitleAlign: 'center',
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'transparent',
          },
          default: {
            backgroundColor: colorScheme === 'light' ? themes.light.background : themes.dark.background,
            borderWidth:0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Raffle Mania',
          tabBarIcon: ({ color }) => <House size="$2" color={color} />,
          
          headerRight: () => (
            <Button
              icon={<BellRing size="$2" color={themes[colorScheme ?? 'light'].color} />}
              chromeless
              paddingHorizontal="$2"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Compass size="$2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="winners"
        options={{
          title: 'Winners',
          tabBarIcon: ({ color }) => <Trophy size="$2" color={color} />,
        }}
      />
        <Tabs.Screen
          name="(myraffles)"
         
          options={{
            title: 'My Raffles',
            tabBarIcon: ({ color }) => <Ticket size="$2" color={color} />,
            headerStyle:{
              borderWidth:0,
              shadowRadius:0,
              elevation:0,
              backgroundColor: colorScheme === 'light' ? themes.light.background : themes.dark.background,
              //borderColor:"blue"
            }
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size="$2" color={color} />,
        }}
      />
    </Tabs>
  );
}
