import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MyRafflesScreen extends StatelessWidget {
  final List<Map<String, dynamic>> activeRaffles = [
    {
      'title': 'Luxury Getaway',
      'entries': 1000,
      'endsIn': 'Ends in 2d 12h',
      'tickets': 1,
      'image': 'assets/images/luxury.png',
    },
    {
      'title': 'Tech Bundle',
      'entries': 500,
      'endsIn': 'Ends in 1d 18h',
      'tickets': 2,
      'image': 'assets/images/tech.png',
    },
    {
      'title': 'Fashion Spree',
      'entries': 2000,
      'endsIn': 'Ends in 3d 6h',
      'tickets': 1,
      'image': 'assets/images/fashion.png',
    },
  ];

   MyRafflesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: Color(0xFF0C101A),
        appBar: AppBar(
          backgroundColor: Color(0xFF0C101A),
          elevation: 0,
          title: Text("My Raffles", style: GoogleFonts.inter(color: Colors.white)),
          bottom: TabBar(
            labelColor: Colors.white,
            unselectedLabelColor: Colors.grey,
            indicatorColor: Colors.white,
            tabs: [
              Tab(text: 'Active'),
              Tab(text: 'Past'),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            _buildRaffleList(activeRaffles),
            Center(child: Text("No past raffles", style: TextStyle(color: Colors.white))),
          ],
        ),
      ),
    );
  }

  Widget _buildRaffleList(List<Map<String, dynamic>> raffles) {
    return ListView.builder(
      itemCount: raffles.length,
      padding: const EdgeInsets.all(16),
      itemBuilder: (context, index) {
        final raffle = raffles[index];
        return Container(
          margin: const EdgeInsets.only(bottom: 16),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(raffle['endsIn'],
                        style: TextStyle(color: Colors.grey, fontSize: 12)),
                    SizedBox(height: 4),
                    Text(raffle['title'],
                        style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold)),
                    Text("${raffle['entries']} entries",
                        style: TextStyle(color: Colors.grey, fontSize: 13)),
                    SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 12),
                      decoration: BoxDecoration(
                        color: Color(0xFF1F2633),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text("${raffle['tickets']} ticket",
                          style: TextStyle(color: Colors.white)),
                    ),
                  ],
                ),
              ),
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
      },
    );
  }
}
