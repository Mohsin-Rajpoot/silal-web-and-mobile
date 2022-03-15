import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

const Graph = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 500,
          height: 707,
          marginHorizontal: 15,
          borderRadius: 5,
        }}>
        <View style={{ paddingVertical: 15, paddingHorizontal: 25 }}>
          <Text style={{ color: '#002733', fontSize: 17, fontWeight: 'bold' }}>
            Revenue overview
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <BarChart
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  datasets: [
                    {
                      data: [50, 200, 130, 280, 220, 350],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 500}
                height={220}
                yAxisLabel={'$'}
                chartConfig={{
                  backgroundColor: '#FFFFFF',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  fillShadowGradientOpacity: 1,
                  barRadius: 5,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
                  color: (opacity = 1) => `#5AB3A8`


                }}
                style={{ marginTop: 70 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingTop: 30,

  },
});

