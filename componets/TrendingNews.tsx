import React from 'react';
import { StyleSheet, View } from 'react-native';

type TrendingNewsType = {
    news: {
        title: string;
        description: string;
        body: string;
    }
};

function TrendingNews({ news }: TrendingNewsType) {
    const { title, description, body } = news;
    return (
        <View style={styles.trending_news}>
            <h1>Trending News</h1>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{body}</p>
            </div>
        </View>
    )
}

const styles = StyleSheet.create({
    trending_news: {
        padding: 10,
    }
})

export default TrendingNews;