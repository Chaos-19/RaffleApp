import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../viewmodels/bottom_nav_viewmodel.dart';
import 'winners_screen.dart';
import 'profile_screen.dart';
import 'my_tickets_screen.dart';

import 'package:google_fonts/google_fonts.dart';

class HomeScreen extends StatelessWidget {
  final featuredRaffles = [
    {
      'title': 'Win a Trip to Dubai',
      'subtitle': 'Experience the ultimate luxury',
      'image': 'assets/images/image.png',
    },
    {
      'title': 'iPhone 15 Giveaway',
      'subtitle': 'Get the latest tech in your hands',
      'image': 'assets/images/image.png',
    },
  ];

  final endingSoonRaffles = [
    {
      'title': 'Tech Bundle',
      'subtitle': 'Includes a laptop, headphones, and smartwatch',
      'endsIn': 'Ends in 2 days',
      'image': 'assets/images/image.png',
    },
    {
      'title': 'Vacation Getaway',
      'subtitle': 'All-inclusive trip to the Bahamas',
      'endsIn': 'Ends in 5 days',
      'image': 'assets/images/image.png',
    },
  ];

   HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSearchBar(),
          const SizedBox(height: 24),
          Text(
            'Featured Raffles',
            style: GoogleFonts.inter(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 12),
          _buildFeaturedList(),
          const SizedBox(height: 24),
          Text(
            'Ending Soon',
            style: GoogleFonts.inter(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 12),
          ...endingSoonRaffles.map(_buildEndingSoonCard),
        ],
      ),
    );
  }

  Widget _buildSearchBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: const Color(0xFF1F2633),
        borderRadius: BorderRadius.circular(12),
      ),
      child: const TextField(
        style: TextStyle(color: Colors.white),
        decoration: InputDecoration(
          hintText: 'Search for raffles',
          hintStyle: TextStyle(color: Colors.grey),
          border: InputBorder.none,
          icon: Icon(Icons.search, color: Colors.grey),
        ),
      ),
    );
  }

  Widget _buildFeaturedList() {
    return SizedBox(
      height: 160,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: featuredRaffles.length,
        itemBuilder: (context, index) {
          final raffle = featuredRaffles[index];
          return Container(
            width: 220,
            margin: const EdgeInsets.only(right: 12),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Stack(
                children: [
                  Image.asset(
                    raffle['image']!,
                    width: double.infinity,
                    height: double.infinity,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Colors.black54, Colors.transparent],
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                      ),
                    ),
                    alignment: Alignment.bottomLeft,
                    child: Text(
                      raffle['title']!,
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildEndingSoonCard(Map<String, dynamic> raffle) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  raffle['endsIn'],
                  style: const TextStyle(color: Colors.grey, fontSize: 12),
                ),
                const SizedBox(height: 4),
                Text(
                  raffle['title'],
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  raffle['subtitle'],
                  style: const TextStyle(color: Colors.grey, fontSize: 13),
                ),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.symmetric(
                    vertical: 6,
                    horizontal: 12,
                  ),
                  decoration: BoxDecoration(
                    color: const Color(0xFF1F2633),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text(
                    "Join Raffle",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.asset(
              raffle['image'],
              width: 80,
              height: 80,
              fit: BoxFit.cover,
            ),
          ),
        ],
      ),
    );
  }
}

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = Provider.of<BottomNavViewModel>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Raffle'),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications),
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Notifications clicked!')),
              );
            },
          ),
        ],
      ),
      body: IndexedStack(
        index: viewModel.currentIndex,
        children: [
          HomeScreen(),
          MyTicketsScreen(),
          const WinnersScreen(),
          const ProfileScreen(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: viewModel.currentIndex,
        onTap: (index) => viewModel.setIndex(index),
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
        type: BottomNavigationBarType.fixed, // Ensures all items are visible
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(
            icon: Icon(Icons.confirmation_number),
            label: 'My Tickets',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.emoji_events),
            label: 'Winners',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}

/*import 'package:flutter/material.dart';
import 'package:myapp/viewmodels/bottom_nav_viewmodel.dart';
import 'package:myapp/views/screens/profile_screen.dart';
import 'package:myapp/views/screens/search_screen.dart';
import 'package:provider/provider.dart';

// Sample screen widgets
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Home Screen'));
  }
}

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = Provider.of<BottomNavViewModel>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Bottom Navigation'),
        centerTitle: true, // Center the title
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications),
            onPressed: () {
              // Add notification action here
              // Example: Navigate to a notifications screen or show a dialog
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Notifications clicked!')),
              );
            },
          ),
        ],
      ),
      body: IndexedStack(
        index: viewModel.currentIndex,
        children: const [HomeScreen(), SearchScreen(), ProfileScreen()],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: viewModel.currentIndex,
        onTap: (index) => viewModel.setIndex(index),
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}
*/
